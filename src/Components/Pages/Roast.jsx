import React, { useState, useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import { supabase } from "./supabaseClient";
import { motion } from "framer-motion";
import "./ArtistSubmission.css";

export default function ArtistSubmission() {
  const [form, setForm] = useState({ description: "", wallet: "", file: null });
  const [errors, setErrors] = useState({});
  const [artList, setArtList] = useState([]);
  const [votes, setVotes] = useState({});
  const [selectedArt, setSelectedArt] = useState(null);
  const [voteArt, setVoteArt] = useState(null);
  const [voterWallet, setVoterWallet] = useState("");

  useEffect(() => {
    fetchArt();
    fetchVotes();
    const subscription = supabase
      .channel("realtime_votes")
      .on("postgres_changes", { event: "*", schema: "public", table: "votes" }, fetchVotes)
      .subscribe();
    return () => supabase.removeChannel(subscription);
  }, []);

  async function fetchArt() {
    const { data } = await supabase.from("artworks").select("*");
    setArtList(data || []);
  }

  async function fetchVotes() {
    const { data } = await supabase.from("votes").select("artwork_id, voter_wallet");
    const counts = {};
    (data || []).forEach(({ artwork_id }) => {
      counts[artwork_id] = (counts[artwork_id] || 0) + 1;
    });
    setVotes(counts);
  }

  // Allow up to 200 chars
  const validateDescription = (d) => d.length <= 200;
  const validateSolanaWallet = (w) => {
    try {
      const pk = new PublicKey(w);
      return PublicKey.isOnCurve(pk);
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((p) => ({ ...p, [name]: files ? files[0] : value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description, wallet, file } = form;
    const errs = {};
    if (!validateDescription(description)) errs.description = "Max 200 characters.";
    if (!validateSolanaWallet(wallet)) errs.wallet = "Invalid Solana address.";
    if (!file) errs.file = "Image required.";
    const { data: ex } = await supabase.from("artworks").select("id").eq("wallet", wallet);
    if (ex?.length > 0) errs.wallet = "Wallet already submitted.";
    if (Object.keys(errs).length) return setErrors(errs);

    const ext = file.name.split(".").pop();
    const filename = `${Date.now()}.${ext}`;
    await supabase.storage.from("artworks").upload(filename, file);
    const publicUrl = supabase.storage.from("artworks").getPublicUrl(filename).data.publicUrl;
    await supabase.from("artworks").insert([{ description, wallet, image_url: publicUrl }]);
    setForm({ description: "", wallet: "", file: null });
    fetchArt();
  };

  const handleVoteSubmit = async () => {
    if (!validateSolanaWallet(voterWallet)) {
      alert("❌ Invalid wallet. Use a real Solana address.");
      return;
    }
    const { error } = await supabase.from("votes").insert([{ artwork_id: voteArt.id, voter_wallet: voterWallet }]);
    if (error) {
      alert(error.code === "23505" ? "You already voted." : "Vote error.");
    } else {
      alert("✅ Vote recorded!");
      fetchVotes();
    }
    setVoterWallet("");
    setVoteArt(null);
  };

  const leaderboard = artList
    .map((a) => ({ ...a, voteCount: votes[a.id] || 0 }))
    .sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div className="uni-container">
      {/* Submission Form */}
      <div className="uni-card">
        <h2 className="uni-header">📚 $COURSE Meme Submission</h2>
        <form onSubmit={handleSubmit} className="submission-form">
          <label>Funny Caption (max 200 chars)</label>
          <input type="text" name="description" value={form.description} onChange={handleChange} />
          {errors.description && <div className="error">{errors.description}</div>}

          <label>Solana Wallet Address</label>
          <input type="text" name="wallet" value={form.wallet} onChange={handleChange} />
          {errors.wallet && <div className="error">{errors.wallet}</div>}

          <label>Upload Meme</label>
          <input type="file" accept="image/*" name="file" onChange={handleChange} />
          {errors.file && <div className="error">{errors.file}</div>}

          <button type="submit" className="uni-btn">🔥 Enroll Meme</button>
        </form>
      </div>

      {/* Gallery */}
      <div className="uni-card">
        <h2 className="uni-header">🏛️ Meme Gallery</h2>
        <motion.div className="listGrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {leaderboard.map((art, idx) => (
            <motion.div className="listItem" key={art.id} whileHover={{ scale: 1.05 }}>
              <div className="rank-badge">#{idx + 1}</div>
              <img
                src={art.image_url}
                alt={`Meme ${idx + 1}`}
                onClick={() => setSelectedArt(art)}
              />
              <div className="voteCount">😂 {art.voteCount} laughs</div>
              <button className="vote-btn" onClick={() => setVoteArt(art)}>👍 Vote</button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vote Modal */}
      {voteArt && (
        <div className="modal-backdrop">
          <div className="modal-window">
            <div className="modal-header">
              Vote for Meme
              <button className="close-btn" onClick={() => setVoteArt(null)}>x</button>
            </div>
            <div className="modal-content">
              <label>Your Solana Wallet</label>
              <input
                type="text"
                value={voterWallet}
                onChange={(e) => setVoterWallet(e.target.value)}
                className="wallet-input"
              />
              <button className="uni-btn" onClick={handleVoteSubmit}>✅ Vote</button>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <div className="uni-card">
        <h2 className="uni-header">🎓 Roast Leaderboard</h2>
        <ol>
          {leaderboard.map((a, i) => (
            <li key={a.id}>#{i + 1} – {a.description} ({a.voteCount} votes)</li>
          ))}
        </ol>
      </div>

      {/* Image preview */}
      {selectedArt && (
        <div className="modal-backdrop">
          <div className="modal-window">
            <div className="modal-header">
              Meme Preview
              <button className="close-btn" onClick={() => setSelectedArt(null)}>x</button>
            </div>
            <div className="modal-content">
              <img src={selectedArt.image_url} alt="meme" className="modal-image" />
              <p>{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full flex justify-center">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .avatar-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <img
        src="/avatar.png"
        alt="Bianca Principi"
        className="avatar-float"
        style={{ width: "320px", height: "320px", objectFit: "contain" }}
      />
    </div>
  );
}
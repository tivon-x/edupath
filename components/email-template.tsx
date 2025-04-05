interface EmailTemplateProps {
  userEmail: string
  verificationToken: string
}

export const EmailTemplate = ({ userEmail, verificationToken }: EmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "5px" }}>
        <h2 style={{ color: "#333", textAlign: "center" }}>
          <span style={{ color: "#4a6ee0" }}>EduPath</span> 邮件验证
        </h2>
        <p>你好 {userEmail},</p>
        <p>感谢您注册EduPath！请使用以下验证码来验证您的电子邮件地址并完成注册过程。</p>
        <div
          style={{
            background: "#ffffff",
            padding: "15px",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "20px 0",
            letterSpacing: "5px",
            color: "#4a6ee0",
          }}
        >
          {verificationToken}
        </div>
        <p>这个验证码将在 10 分钟内过期。请在此时间段内使用它。</p>
        <p>如果您没有请求此验证码，请忽略此电子邮件。</p>
        <hr style={{ borderTop: "1px solid #ddd", margin: "20px 0" }} />
        <p style={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
          这是一封自动生成的电子邮件，请勿回复。
        </p>
      </div>
    </div>
  )
}

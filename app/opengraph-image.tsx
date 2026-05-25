import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          fontFamily: 'ui-monospace, monospace',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: 'flex', marginBottom: '56px' }}>
          <div style={{ width: '40px', height: '2px', background: '#4ade80' }} />
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: '16px',
            color: '#71717a',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '28px',
            display: 'flex',
          }}
        >
          PROOFPATCH
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '62px',
            fontWeight: 600,
            color: '#fafafa',
            lineHeight: 1.1,
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span>Audit every AI-generated</span>
          <span>patch before it ships.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '22px',
            color: '#a1a1aa',
            display: 'flex',
            marginBottom: '0px',
          }}
        >
          Local evidence for AI coding-agent changes.
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
          {['local-first', 'audit trail', 'rollback review'].map((tag) => (
            <div
              key={tag}
              style={{
                border: '1px solid #27272a',
                background: '#18181b',
                color: '#71717a',
                fontSize: '15px',
                padding: '8px 18px',
                display: 'flex',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}

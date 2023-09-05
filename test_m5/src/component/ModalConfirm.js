

function ModalConfirm({title,msg,onConfirm,onClose}) {

  return (
    <div style={{
      position: 'fixed',
      top: '25%',
      left: 'calc((100% - 22vw) /2)',
      width:'284px',
      zIndex: 99999,
      backgroundColor: 'whitesmoke',
      borderRadius: '5px',
      boxShadow: "0 0 0 50vmax rgba(0,0,0,.5)"
  }}>
      <div className="header" style={{ borderBottom: '1px solid gray', padding: '5px 10px' }}>
          <div style={{ position: 'relative' }}>
              <p style={{ fontWeight: 700 }}>{title}</p>
              <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  cursor: 'pointer',
                  width: '22px',
                  height: '22px',
                  border: '1px solid gray',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '12px',
                  borderRadius: '50%'
              }} onClick={onClose}>
                  x
              </div>
          </div>
      </div>
      <div className="body" style={{
          padding: '20px 10px'
      }}>
          {msg}
      </div>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px auto'
      }}>
          <button style={{
              width: '72px',
              maxWidth: '72px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '4pt 10pt',
              fontWeight: 600,
              backgroundColor: 'gray',
              borderColor: 'gray',
              color: 'white',
              cursor: 'pointer'
          }}
              onClick={onClose}>
              Close
          </button>
          <button style={{
              marginRight: '20px',
              width: '72px',
              margin: '0 0 0 5px',
              maxWidth: '72px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '4pt 10pt',
              fontWeight: 600,
              backgroundColor: 'red',
              borderColor: 'red',
              color: 'white',
              cursor: 'pointer'
          }} onClick={onConfirm}>
              OK
          </button>
      </div>
  </div>
  );
}

export default ModalConfirm;
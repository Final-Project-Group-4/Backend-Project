import './_ConfirmationBox.scss';

function ConfirmationBox({ message }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h3>{message}</h3>
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <button style={{ background: 'red' }}>Yes</button>
          <button style={{ background: 'green' }}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationBox;

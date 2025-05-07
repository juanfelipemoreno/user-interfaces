import {ProgressBar} from 'react-bootstrap';

function ProgressBarComp({percentage = 20}) {
  return (
    <div>
      <ProgressBar striped variant="info" now={percentage} />
    </div>
  );
}

export default ProgressBarComp;
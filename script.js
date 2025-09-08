document.getElementById('checkForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const svc = document.getElementById('serviceNumber').value.trim();
  const aad = document.getElementById('aadhaarNumber').value.trim();
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = '';
  resultDiv.style.color = 'black';

  if (svc.length !== 13 || isNaN(svc)) {
    resultDiv.textContent = 'Please enter a valid 13-digit Service Number.';
    resultDiv.style.color = 'red';
    return;
  }

  if (aad.length !== 12 || isNaN(aad)) {
    resultDiv.textContent = 'Please enter a valid 12-digit Aadhaar Number.';
    resultDiv.style.color = 'red';
    return;
  }

  // Simulated response behavior
  resultDiv.textContent = 'Fetching your bill details...';
  setTimeout(() => {
    resultDiv.textContent = `Service Number: ${svc}\nAadhaar: ${aad}\nBill Amount: ₹ xxxx.xx\nDue Date: DD-MM-YYYY`;
  }, 1000);
});

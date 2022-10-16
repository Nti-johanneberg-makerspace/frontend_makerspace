export async function handleCallback(response, setItems) {
  let apifetch = await fetch('http://127.0.0.1:8787/jsondata', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ credential: response.credential }),
  });
  console.log(apifetch.headers.get('Set-Cookie'));
  localStorage.setItem('uuid', await apifetch.json());
  window.location.reload(false);
}

function GoogleLogin() {
  /* global google */
  google.accounts.id.initialize({
    client_id:
      '1058252294256-0ej4mt1vgmktaelhcgkt2bl7r9emd2pm.apps.googleusercontent.com',
    callback: handleCallback,
  });

  google.accounts.id.renderButton(document.getElementById('google_sign_in'), {
    theme: 'filled_black',
    size: 'large',
    shape: 'pill',
  });
}
export default GoogleLogin;

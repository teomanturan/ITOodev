document.getElementById('hastaKayitFormu').addEventListener('submit', function(event) {
    event.preventDefault();

    const hasta = {
        ad: document.getElementById('ad').value,

        soyad: document.getElementById('soyad').value,

        tc: document.getElementById('tcno').value,

        dogumTarihi: document.getElementById('dogumtarihi').value,
        
    };

    let hastalar = JSON.parse(localStorage.getItem('hastalar')) || [];
    hastalar.push(hasta);
    localStorage.setItem('hastalar', JSON.stringify(hastalar));

    alert('Hasta bilgileri kaydedildi!');
    document.getElementById('hastaKayitFormu').reset();
});
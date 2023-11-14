const swals = swal.mixin({
    cancelButtonColor: "d33",
    confirmButtonColor: "#3085d6",
});

async function mulai() {
    await swals.fire("Hii><", "Ada yang ingin aku tannyain dikit ><", "question");
    await swals.fire("Jangan bohonh yaa :)");
    await swals.fire("Aku ga suka orang bohong!", "", "error");
    await swals.fire("Jadi gini", "", "warning");
    await swals.fire("Aku ada hadiah spesial buat kamu", "", "info");
    await swals.fire("Kalo ga suka juga ga apa :)", "", "success");

    const bunga = "flower.html";
    swal.fire({
        title: "Teken ini yaaa ><",
        icon: "warning",
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonText: "OK",
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = bunga;
        }
    });
}

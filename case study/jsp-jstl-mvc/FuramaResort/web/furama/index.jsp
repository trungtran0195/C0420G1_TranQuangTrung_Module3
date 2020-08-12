<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Beautiful Bootstrap Navbar with Menu Icons</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="index.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    <a href="#" class="navbar-brand"><i class="fa fa-cube"></i>Furama<b>Resort</b></a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Collection of nav links, forms, and other content for toggling -->
    <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
        <div class="navbar-nav ml-auto">
            <a href="/?action=home" class="nav-item nav-link active"><i class="fa fa-home"></i><span>Home</span></a>
            <a href="/?action=customer" class="nav-item nav-link"><i class="fas fa-address-book"></i><span>Customer</span></a>
            <a href="/?action=employee" class="nav-item nav-link"><i class="fa fa-users"></i><span>Employee</span></a>
            <a href="/?action=contract" class="nav-item nav-link"><i class="fas fa-file"></i><span>Contract</span></a>
            <a href="/?action=service" class="nav-item nav-link"><i class="fas fa-hotel"></i><span>Service</span></a>
        </div>
    </div>
</nav>
</body>
</html>
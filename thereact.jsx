<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Create New Issue</title>
    <style>
        .min-h-screen {
            min-height: 100vh;
        }
    </style>
</head>
<body class="bg-light">
    <div class="min-h-screen d-flex align-items-center justify-content-center py-5">
        <div class="card w-100" style="max-width: 400px;">
            <div class="card-header text-center">
                <h2 class="card-title">Create New Issue</h2>
            </div>
            <form>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Enter issue title" required>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea class="form-control" id="content" placeholder="Describe the issue" rows="4" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Attach Image</label>
                        <input type="file" class="form-control" id="image" accept="image/*">
                        <div class="mt-2" id="image-preview" style="display: none;">
                            <img src="" alt="Preview" class="img-fluid rounded">
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary w-100">Create Issue</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // Optional: JavaScript to handle image preview (if you want this functionality)
        document.getElementById('image').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('image-preview');
                    preview.querySelector('img').src = e.target.result;
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    </script>
</body>
</html>

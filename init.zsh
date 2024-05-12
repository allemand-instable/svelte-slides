read dst
mkdir -p "$dst"

rsync --recursive "./" "$dst" --exclude=".git" --exclude="node_modules" --exclude="**/.vscode" --exclude="README.md" 


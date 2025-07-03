#!/bin/bash

# Set system-wide file limits (macOS)
echo "---- Setting system-wide file limits (requires sudo) ----"
sudo sh -c 'echo "kern.maxfiles=1048576" >> /etc/sysctl.conf'
sudo sh -c 'echo "kern.maxfilesperproc=1048576" >> /etc/sysctl.conf'
sudo sysctl -w kern.maxfiles=1048576
sudo sysctl -w kern.maxfilesperproc=1048576

# Add ulimit to user shell profile
PROFILE=""
if [ -n "$ZSH_VERSION" ]; then
  PROFILE=~/.zshrc
elif [ -n "$BASH_VERSION" ]; then
  PROFILE=~/.bash_profile
else
  PROFILE=~/.profile
fi

grep -qxF 'ulimit -n 1048576' $PROFILE || echo 'ulimit -n 1048576' >> $PROFILE

echo "---- Creating assets directory and blank favicon.png ----"
mkdir -p assets
touch assets/favicon.png

echo "---- Done! ----"
echo "1. Please reboot your computer for system limits to take effect."
echo "2. After reboot, open a new terminal and run: ulimit -n"
echo "   It should print: 1048576"
echo "3. You can now start your Expo/React Native project without EMFILE errors."

git submodule update --init --recursive
dotnet build .\Avalonia\src\Avalonia.Base\Avalonia.Base.csproj -c Release
dotnet build .\Sandcastle\ApiDocumentation.shfbproj -c Release
param (
	[Parameter(Mandatory, HelpMessage="Enter the Avalonia version to document")]
	[string]$version
   
	[Parameter()]
	[switch]$preview
)

# Update git submodules
git config --file=.gitmodules submodule.Avalonia.branch "release/$version"  # change branch to requested version
git submodule update --init --recursive

# Define a list of dotNET projects to build
$avaloniaProjects = @(
    # Documented Avalonia projects
	"Avalonia\packages\Avalonia\Avalonia.csproj", 
	"Avalonia\src\tools\Avalonia.Analyzers\Avalonia.Analyzers.csproj", 
	"Avalonia\src\Android\Avalonia.Android\Avalonia.Android.csproj", 
	"Avalonia\src\Avalonia.Base\Avalonia.Base.csproj", 
	"Avalonia\src\Browser\Avalonia.Browser\Avalonia.Browser.csproj", 
	"Avalonia\src\Browser\Avalonia.Browser.Blazor\Avalonia.Browser.Blazor.csproj", 
	"Avalonia\src\Avalonia.Controls\Avalonia.Controls.csproj", 
	"Avalonia\src\Avalonia.Controls.ColorPicker\Avalonia.Controls.ColorPicker.csproj", 
	"Avalonia\src\Avalonia.Controls.DataGrid\Avalonia.Controls.DataGrid.csproj", 
	"Avalonia\src\Avalonia.Desktop\Avalonia.Desktop.csproj", 
	"Avalonia\src\Avalonia.Diagnostics\Avalonia.Diagnostics.csproj", 
	"Avalonia\src\Avalonia.Dialogs\Avalonia.Dialogs.csproj", 
	"Avalonia\src\Windows\Avalonia.Direct2D1\Avalonia.Direct2D1.csproj", 
	"Avalonia\src\Avalonia.Fonts.Inter\Avalonia.Fonts.Inter.csproj", 
	"Avalonia\src\Avalonia.FreeDesktop\Avalonia.FreeDesktop.csproj", 
	"Avalonia\src\iOS\Avalonia.iOS\Avalonia.iOS.csproj", 
	"Avalonia\src\Linux\Avalonia.LinuxFramebuffer\Avalonia.LinuxFramebuffer.csproj", 
	"Avalonia\src\Markup\Avalonia.Markup\Avalonia.Markup.csproj", 
	"Avalonia\src\Markup\Avalonia.Markup.Xaml\Avalonia.Markup.Xaml.csproj", 
	"Avalonia\src\Avalonia.Metal\Avalonia.Metal.csproj", 
	"Avalonia\src\Avalonia.MicroCom\Avalonia.MicroCom.csproj", 
	"Avalonia\src\Avalonia.Native\Avalonia.Native.csproj", 
	"Avalonia\src\Avalonia.OpenGL\Avalonia.OpenGL.csproj", 
	"Avalonia\src\Avalonia.ReactiveUI\Avalonia.ReactiveUI.csproj", 
	"Avalonia\src\Skia\Avalonia.Skia\Avalonia.Skia.csproj", 
	"Avalonia\src\Avalonia.Themes.Fluent\Avalonia.Themes.Fluent.csproj", 
	"Avalonia\src\Avalonia.Themes.Simple\Avalonia.Themes.Simple.csproj", 
	"Avalonia\src\Avalonia.Vulkan\Avalonia.Vulkan.csproj", 
	"Avalonia\src\Windows\Avalonia.Win32\Avalonia.Win32.csproj", 
	"Avalonia\src\Windows\Avalonia.Win32.Automation\Avalonia.Win32.Automation.csproj", 
	"Avalonia\src\Windows\Avalonia.Win32.Interoperability\Avalonia.Win32.Interoperability.csproj", 
	"Avalonia\src\Avalonia.X11\Avalonia.X11.csproj", 
	
	# Sandcastle documentation
	"src\ApiDocumentation\DocusaurusExportPlugin\DocusaurusExportPlugin.csproj",
	"src\ApiDocumentation\DocusaurusPresentationStyle\DocusaurusPresentationStyle.csproj",
	"src\ApiDocumentation\AvaloniaAttributesPlugin\AvaloniaAttributesPlugIn.csproj",
	"src\ApiDocumentation\ApiDocumentation\ApiDocumentation.shfbproj"
)

foreach ($proj in $avaloniaProjects){
	dotnet build $proj -c Release 
}

# Run the docs. Comment either one
cd website 

# preview the website if preview switch is on
if($preview.IsPresent){
	npx docusaurus start
}
else{
	pnpm run build 
}

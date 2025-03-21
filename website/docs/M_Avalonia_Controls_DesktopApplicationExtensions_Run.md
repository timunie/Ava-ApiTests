# Run(Application, Window) Method


On desktop-style platforms runs the application's main loop until main window is closed



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void Run(
	this Application app,
	Window mainWindow
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Sub Run ( 
	app As Application,
	mainWindow As Window
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Run : 
        app : Application * 
        mainWindow : Window -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/DesktopApplicationExtensions.cs#L33" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Application">Application</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Window">Window</a></dt><dd> </dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Application">Application</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
Consider using StartWithDesktopStyleLifetime instead, see https://github.com/AvaloniaUI/Avalonia/wiki/Application-lifetimes for details

## See Also


#### Reference
<a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions Class</a>  
<a href="Overload_Avalonia_Controls_DesktopApplicationExtensions_Run">Run Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


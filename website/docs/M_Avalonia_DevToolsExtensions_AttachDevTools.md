# AttachDevTools(Application, DevToolsOptions) Method


Attaches DevTools to a Application, to be opened with the specified options.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Diagnostics (in Avalonia.Diagnostics.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void AttachDevTools(
	this Application application,
	DevToolsOptions options
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Sub AttachDevTools ( 
	application As Application,
	options As DevToolsOptions
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member AttachDevTools : 
        application : Application * 
        options : DevToolsOptions -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Diagnostics/DevToolsExtensions.cs#L82" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Application">Application</a></dt><dd>The Application to attach DevTools to.</dd><dt>  <a href="T_Avalonia_Diagnostics_DevToolsOptions">DevToolsOptions</a></dt><dd>Additional settings of DevTools.</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Application">Application</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.Attach DevTools should only be called after application initialization is complete. A good point is <a href="M_Avalonia_Application_OnFrameworkInitializationCompleted">OnFrameworkInitializationCompleted()</a>

## Example
<code language="cs">public class App : Application \{ public override void OnFrameworkInitializationCompleted() \{ if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktopLifetime) \{ desktopLifetime.MainWindow = new MainWindow(); } else if (ApplicationLifetime is ISingleViewApplicationLifetime singleViewLifetime) singleViewLifetime.MainView = new MainView(); base.OnFrameworkInitializationCompleted(); this.AttachDevTools(new Avalonia.Diagnostics.DevToolsOptions() \{ StartupScreenIndex = 1, }); } }</code>

## See Also


#### Reference
<a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions Class</a>  
<a href="Overload_Avalonia_DevToolsExtensions_AttachDevTools">AttachDevTools Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


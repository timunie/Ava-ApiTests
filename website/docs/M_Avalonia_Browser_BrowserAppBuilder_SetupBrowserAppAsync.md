# SetupBrowserAppAsync Method


Loads avalonia javascript modules and configures browser backend.



## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task SetupBrowserAppAsync(
	this AppBuilder builder,
	BrowserPlatformOptions? options = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function SetupBrowserAppAsync ( 
	builder As AppBuilder,
	Optional options As BrowserPlatformOptions = Nothing
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member SetupBrowserAppAsync : 
        builder : AppBuilder * 
        ?options : BrowserPlatformOptions 
(* Defaults:
        let _options = defaultArg options null
*)
-> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd>Application builder.</dd><dt>  <a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions</a>  (Optional)</dt><dd>Browser backend specific options.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
This method doesn't creates any avalonia views to be rendered. To do so create an <a href="T_Avalonia_Browser_AvaloniaView">AvaloniaView</a> object. Alternatively, you can call <a href="M_Avalonia_Browser_BrowserAppBuilder_StartBrowserAppAsync">StartBrowserAppAsync(AppBuilder, String, BrowserPlatformOptions)</a> method instead of SetupBrowserAppAsync(AppBuilder, BrowserPlatformOptions).

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserAppBuilder">BrowserAppBuilder Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  


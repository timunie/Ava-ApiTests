# StartBlazorAppAsync Method


Configures blazor backend, loads avalonia javascript modules and creates a single view lifetime.



## Definition
**Namespace:** <a href="N_Avalonia_Browser_Blazor">Avalonia.Browser.Blazor</a>  
**Assembly:** Avalonia.Browser.Blazor (in Avalonia.Browser.Blazor.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task StartBlazorAppAsync(
	this AppBuilder builder,
	BrowserPlatformOptions? options = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function StartBlazorAppAsync ( 
	builder As AppBuilder,
	Optional options As BrowserPlatformOptions = Nothing
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member StartBlazorAppAsync : 
        builder : AppBuilder * 
        ?options : BrowserPlatformOptions 
(* Defaults:
        let _options = defaultArg options null
*)
-> Task 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd>Application builder.</dd><dt>  BrowserPlatformOptions  (Optional)</dt><dd>Browser backend specific options.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Browser_Blazor_BlazorAppBuilder">BlazorAppBuilder Class</a>  
<a href="N_Avalonia_Browser_Blazor">Avalonia.Browser.Blazor Namespace</a>  


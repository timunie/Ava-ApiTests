# SetupWithClassicDesktopLifetime Method


Setups the Application with a IClassicDesktopStyleApplicationLifetime, but doesn't show the main window and doesn't run application main loop.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AppBuilder SetupWithClassicDesktopLifetime(
	this AppBuilder builder,
	string[] args,
	Action<IClassicDesktopStyleApplicationLifetime>? lifetimeBuilder = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function SetupWithClassicDesktopLifetime ( 
	builder As AppBuilder,
	args As String(),
	Optional lifetimeBuilder As Action(Of IClassicDesktopStyleApplicationLifetime) = Nothing
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member SetupWithClassicDesktopLifetime : 
        builder : AppBuilder * 
        args : string[] * 
        ?lifetimeBuilder : Action<IClassicDesktopStyleApplicationLifetime> 
(* Defaults:
        let _lifetimeBuilder = defaultArg lifetimeBuilder null
*)
-> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs#L259" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd>Application builder.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd>Startup arguments.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a>)  (Optional)</dt><dd>Lifetime builder to modify the lifetime before application started.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
Exit code.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


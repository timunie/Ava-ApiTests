# UseReactiveUI Method


Initializes ReactiveUI framework to use with Avalonia. Registers Avalonia scheduler, an activation for view fetcher, a template binding hook. Remember to call this method if you are using ReactiveUI in your application.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AppBuilder UseReactiveUI(
	this AppBuilder builder
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function UseReactiveUI ( 
	builder As AppBuilder
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member UseReactiveUI : 
        builder : AppBuilder -> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AppBuilderExtensions.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AppBuilderExtensions">AppBuilderExtensions Class</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  


# GetRequiredService(IAvaloniaDependencyResolver, Type) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object GetRequiredService(
	this IAvaloniaDependencyResolver resolver,
	Type t
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetRequiredService ( 
	resolver As IAvaloniaDependencyResolver,
	t As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetRequiredService : 
        resolver : IAvaloniaDependencyResolver * 
        t : Type -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs#L134" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_LocatorExtensions">LocatorExtensions Class</a>  
<a href="Overload_Avalonia_LocatorExtensions_GetRequiredService">GetRequiredService Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

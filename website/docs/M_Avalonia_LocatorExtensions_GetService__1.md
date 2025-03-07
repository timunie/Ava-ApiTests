# GetService&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static T GetService<T>(
	this IAvaloniaDependencyResolver resolver
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetService(Of T) ( 
	resolver As IAvaloniaDependencyResolver
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetService : 
        resolver : IAvaloniaDependencyResolver -> 'T 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs#L129" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_LocatorExtensions">LocatorExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

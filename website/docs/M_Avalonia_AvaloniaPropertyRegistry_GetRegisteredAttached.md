# GetRegisteredAttached Method


Gets all attached <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<AvaloniaProperty> GetRegisteredAttached(
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetRegisteredAttached ( 
	type As Type
) As IReadOnlyList(Of AvaloniaProperty)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetRegisteredAttached : 
        type : Type -> IReadOnlyList<AvaloniaProperty> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs#L129" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)  
A collection of <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> definitions.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyRegistry">AvaloniaPropertyRegistry Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


# GetRegisteredInherited Method


Gets all inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<AvaloniaProperty> GetRegisteredInherited(
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetRegisteredInherited ( 
	type As Type
) As IReadOnlyList(Of AvaloniaProperty)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetRegisteredInherited : 
        type : Type -> IReadOnlyList<AvaloniaProperty> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs#L188" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)  
A collection of <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> definitions.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyRegistry">AvaloniaPropertyRegistry Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

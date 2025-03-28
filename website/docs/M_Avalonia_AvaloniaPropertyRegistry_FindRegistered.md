# FindRegistered(AvaloniaObject, String) Method


Finds a registered property on an object by name.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaProperty? FindRegistered(
	AvaloniaObject o,
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function FindRegistered ( 
	o As AvaloniaObject,
	name As String
) As AvaloniaProperty
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FindRegistered : 
        o : AvaloniaObject * 
        name : string -> AvaloniaProperty 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs#L319" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The property name.</dd></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  
The registered property or null if no matching property found.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The property name contains a '.'.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyRegistry">AvaloniaPropertyRegistry Class</a>  
<a href="Overload_Avalonia_AvaloniaPropertyRegistry_FindRegistered">FindRegistered Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


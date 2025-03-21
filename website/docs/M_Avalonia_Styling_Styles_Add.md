# Add Method


Adds an item to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Add(
	IStyle item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Add ( 
	item As IStyle
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Add : 
        item : IStyle -> unit 
override Add : 
        item : IStyle -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L162" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_IStyle">IStyle</a></dt><dd>The object to add to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.add" target="_blank" rel="noopener noreferrer">ICollection(T).Add(T)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>The <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  


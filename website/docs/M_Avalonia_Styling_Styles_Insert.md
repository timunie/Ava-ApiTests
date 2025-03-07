# Insert Method


Inserts an item to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a> at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Insert(
	int index,
	IStyle item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Insert ( 
	index As Integer,
	item As IStyle
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Insert : 
        index : int * 
        item : IStyle -> unit 
override Insert : 
        index : int * 
        item : IStyle -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L156" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The zero-based index at which <em>item</em> should be inserted.</dd><dt>  <a href="T_Avalonia_Styling_IStyle">IStyle</a></dt><dd>The object to insert into the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a>.</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.insert" target="_blank" rel="noopener noreferrer">IList(T).Insert(Int32, T)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td><em>index</em> is not a valid index in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>The <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a> is read-only.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

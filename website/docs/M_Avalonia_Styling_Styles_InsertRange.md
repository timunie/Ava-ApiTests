# InsertRange Method


Inserts multiple items at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void InsertRange(
	int index,
	IEnumerable<IStyle> items
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub InsertRange ( 
	index As Integer,
	items As IEnumerable(Of IStyle)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InsertRange : 
        index : int * 
        items : IEnumerable<IStyle> -> unit 
override InsertRange : 
        index : int * 
        items : IEnumerable<IStyle> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L138" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Styling_IStyle">IStyle</a>)</dt><dd>The items.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_InsertRange">IAvaloniaList(T).InsertRange(Int32, IEnumerable(T))</a>  


## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  


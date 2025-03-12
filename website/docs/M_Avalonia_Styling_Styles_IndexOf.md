# IndexOf Method


Determines the index of a specific item in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int IndexOf(
	IStyle item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function IndexOf ( 
	item As IStyle
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IndexOf : 
        item : IStyle -> int 
override IndexOf : 
        item : IStyle -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L153" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_IStyle">IStyle</a></dt><dd>The object to locate in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The index of *item* if found in the list; otherwise, -1.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.indexof" target="_blank" rel="noopener noreferrer">IList(T).IndexOf(T)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  


# Contains Method


Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> contains a specific value.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Contains(
	IStyle item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Contains ( 
	item As IStyle
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Contains : 
        item : IStyle -> bool 
override Contains : 
        item : IStyle -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L168" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_IStyle">IStyle</a></dt><dd>The object to locate in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if *item* is found in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>; otherwise, false.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.contains" target="_blank" rel="noopener noreferrer">ICollection(T).Contains(T)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  


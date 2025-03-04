import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RemoveInternalChildRange Method


Removes child elements from the <a href="P_Avalonia_Controls_Panel_Children">Children</a> collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void RemoveInternalChildRange(
	int index,
	int count
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub RemoveInternalChildRange ( 
	index As Integer,
	count As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RemoveInternalChildRange : 
        index : int * 
        count : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/VirtualizingPanel.cs#L183" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The beginning index position within the collection at which the first child element is removed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of child elements to remove.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

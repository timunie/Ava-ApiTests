import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# DeselectedIndexes Property


Gets the indexes of the items that were removed from the selection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract IReadOnlyList<int> DeselectedIndexes { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride ReadOnly Property DeselectedIndexes As IReadOnlyList(Of Integer)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DeselectedIndexes : IReadOnlyList<int> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Selection/SelectionModelSelectionChangedEventArgs.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs">SelectionModelSelectionChangedEventArgs Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  

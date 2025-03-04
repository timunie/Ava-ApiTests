import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemsSource Property


Gets or sets a collection that is used to generate the content of the selection adapter.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerable? ItemsSource { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ItemsSource As IEnumerable
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ItemsSource : IEnumerable with get, set
override ItemsSource : IEnumerable with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Utils/SelectingItemsControlSelectionAdapter.cs#L142" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>  
The collection used to generate content for the selection adapter.

#### Implements
<a href="P_Avalonia_Controls_Utils_ISelectionAdapter_ItemsSource">ISelectionAdapter.ItemsSource</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter">SelectingItemsControlSelectionAdapter Class</a>  
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  

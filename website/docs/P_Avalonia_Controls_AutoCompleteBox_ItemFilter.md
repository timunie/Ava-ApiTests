import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemFilter Property


Gets or sets the custom method that uses user-entered text to filter the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AutoCompleteFilterPredicate<Object?>? ItemFilter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ItemFilter As AutoCompleteFilterPredicate(Of Object)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemFilter : AutoCompleteFilterPredicate<Object> with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="T_Avalonia_Controls_AutoCompleteFilterPredicate_1">AutoCompleteFilterPredicate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  
The custom method that uses the user-entered text to filter the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property. The default is null.The filter mode is automatically set to Custom if you set the ItemFilter property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

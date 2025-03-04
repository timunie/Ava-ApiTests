import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# DataTemplates Property


Gets or sets the data templates for the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataTemplates DataTemplates { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property DataTemplates As DataTemplates
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DataTemplates : DataTemplates with get
override DataTemplates : DataTemplates with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Control.cs#L127" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Templates_DataTemplates">DataTemplates</a>

#### Implements
<a href="P_Avalonia_Controls_Templates_IDataTemplateHost_DataTemplates">IDataTemplateHost.DataTemplates</a>  


## 
Each control may define data templates which are applied to the control itself and its children.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

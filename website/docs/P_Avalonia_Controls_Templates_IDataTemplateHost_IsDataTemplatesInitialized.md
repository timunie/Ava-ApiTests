import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IsDataTemplatesInitialized Property


Gets a value indicating whether <a href="P_Avalonia_Controls_Templates_IDataTemplateHost_DataTemplates">DataTemplates</a> is initialized.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool IsDataTemplatesInitialized { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property IsDataTemplatesInitialized As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsDataTemplatesInitialized : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/IDataTemplateHost.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## 
The <a href="P_Avalonia_Controls_Templates_IDataTemplateHost_DataTemplates">DataTemplates</a> property may be lazily initialized, if so this property indicates whether it has been initialized.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_IDataTemplateHost">IDataTemplateHost Interface</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

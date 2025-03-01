import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Match Method


Checks to see if this data template matches the specified data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Match(
	Object? data
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Match ( 
	data As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Match : 
        data : Object -> bool 
override Match : 
        data : Object -> bool 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the data template can build a control for the data, otherwise false.

#### Implements
<a href="M_Avalonia_Controls_Templates_IDataTemplate_Match">IDataTemplate.Match(Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

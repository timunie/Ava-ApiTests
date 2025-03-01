import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SharedSizeGroupProperty Field


Shared size group property marks column / row definition as belonging to a group "Foo" or "Bar".



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly AttachedProperty<string?> SharedSizeGroupProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly SharedSizeGroupProperty As AttachedProperty(Of String)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val SharedSizeGroupProperty: AttachedProperty<string>
```
</TabItem>
</Tabs>



#### Field Value
AttachedProperty(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)Value of the Shared Size Group Property must satisfy the following rules: <ul><li>String must not be empty.</li><li>String must consist of letters, digits and underscore ('_') only.</li><li>String must not start with a digit.</li></ul>



## See Also


#### Reference
<a href="T_Avalonia_Controls_DefinitionBase">DefinitionBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

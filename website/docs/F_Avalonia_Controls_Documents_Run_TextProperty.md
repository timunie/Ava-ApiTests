import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextProperty Field


Dependency property backing Text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly StyledProperty<string?> TextProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly TextProperty As StyledProperty(Of String)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val TextProperty: StyledProperty<string>
```
</TabItem>
</Tabs>



#### Field Value
StyledProperty(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)Note that when a TextRange that intersects with this Run gets modified (e.g. by editing a selection in RichTextBox), we will get two changes to this property since we delete and then insert when setting the content of a TextRange.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Documents_Run">Run Class</a>  
<a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents Namespace</a>  

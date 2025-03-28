# SharedSizeGroupProperty Field


Shared size group property marks column / row definition as belonging to a group "Foo" or "Bar".



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/DefinitionBase.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_AttachedProperty_1">AttachedProperty</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)

## Remarks
Value of the Shared Size Group Property must satisfy the following rules: <ul>String must not be empty.String must consist of letters, digits and underscore ('_') only.String must not start with a digit.</ul>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DefinitionBase">DefinitionBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


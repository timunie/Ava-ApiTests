# ApplyStyling Method


Applies styling to the control if the control is initialized and styling is not already applied.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ApplyStyling()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ApplyStyling As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ApplyStyling : unit -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs#L379" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
A value indicating whether styling is now applied to the control.The styling system will automatically apply styling when required, so it should not usually be necessary to call this method manually.

## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

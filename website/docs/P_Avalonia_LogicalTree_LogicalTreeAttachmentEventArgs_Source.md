# Source Property


Gets the control that was attached or detached from the logical tree.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ILogical Source { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Source As ILogical
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Source : ILogical with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/LogicalTreeAttachmentEventArgs.cs#L40" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>

## Remarks
Logical tree attachment events travel down the attached logical tree from the point of attachment/detachment, so this control may be different from the control that the event is being raised on.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs Class</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  


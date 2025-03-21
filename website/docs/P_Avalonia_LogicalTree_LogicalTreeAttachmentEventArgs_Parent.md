# Parent Property


Gets the control that <a href="P_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs_Source">Source</a> is being attached to or detached from.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ILogical? Parent { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Parent As ILogical
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Parent : ILogical with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/LogicalTreeAttachmentEventArgs.cs#L50" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>

## Remarks
For logical tree attachment, holds the new logical parent of <a href="P_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs_Source">Source</a>. For detachment, holds the old logical parent of <a href="P_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs_Source">Source</a>. If the detachment event was caused by a top-level control being closed, then this property will be null.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs Class</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  


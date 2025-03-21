# LogicalTreeAttachmentEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public LogicalTreeAttachmentEventArgs(
	ILogicalRoot root,
	ILogical source,
	ILogical? parent
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	root As ILogicalRoot,
	source As ILogical,
	parent As ILogical
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        root : ILogicalRoot * 
        source : ILogical * 
        parent : ILogical -> LogicalTreeAttachmentEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/LogicalTreeAttachmentEventArgs.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogicalRoot">ILogicalRoot</a></dt><dd>The root of the logical tree.</dd><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd>The control being attached/detached.</dd><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd>The <a href="P_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs_Parent">Parent</a>.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs Class</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  


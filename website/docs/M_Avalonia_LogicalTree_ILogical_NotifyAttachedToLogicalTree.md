# NotifyAttachedToLogicalTree Method


Notifies the control that it is being attached to a rooted logical tree.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void NotifyAttachedToLogicalTree(
	LogicalTreeAttachmentEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub NotifyAttachedToLogicalTree ( 
	e As LogicalTreeAttachmentEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract NotifyAttachedToLogicalTree : 
        e : LogicalTreeAttachmentEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ILogical.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs</a></dt><dd>The event args.</dd></dl>This method will be called automatically by the framework, you should not need to call this method yourself.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_ILogical">ILogical Interface</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  

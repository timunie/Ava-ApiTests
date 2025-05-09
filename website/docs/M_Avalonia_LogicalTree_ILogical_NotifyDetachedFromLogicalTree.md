# NotifyDetachedFromLogicalTree Method


Notifies the control that it is being detached from a rooted logical tree.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void NotifyDetachedFromLogicalTree(
	LogicalTreeAttachmentEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub NotifyDetachedFromLogicalTree ( 
	e As LogicalTreeAttachmentEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract NotifyDetachedFromLogicalTree : 
        e : LogicalTreeAttachmentEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ILogical.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_LogicalTreeAttachmentEventArgs">LogicalTreeAttachmentEventArgs</a></dt><dd>The event args.</dd></dl>

## Remarks
This method will be called automatically by the framework, you should not need to call this method yourself.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_ILogical">ILogical Interface</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  


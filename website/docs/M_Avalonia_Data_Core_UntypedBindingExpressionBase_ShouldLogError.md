# ShouldLogError Method


Gets a value indicating whether an error should be logged given the current state of the binding expression.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool ShouldLogError(
	out AvaloniaObject?? target
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function ShouldLogError ( 
	<OutAttribute> ByRef target As AvaloniaObject
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShouldLogError : 
        target : AvaloniaObject byref -> bool 
override ShouldLogError : 
        target : AvaloniaObject byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs#L464" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>When the method returns, contains the target object, if it is available.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if an error should be logged; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  

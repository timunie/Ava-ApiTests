# Track Method




## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<ILogical?> Track(
	ILogical relativeTo,
	int ancestorLevel,
	Type? ancestorType = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Track ( 
	relativeTo As ILogical,
	ancestorLevel As Integer,
	Optional ancestorType As Type = Nothing
) As IObservable(Of ILogical)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Track : 
        relativeTo : ILogical * 
        ancestorLevel : int * 
        ?ancestorType : Type 
(* Defaults:
        let _ancestorType = defaultArg ancestorType null
*)
-> IObservable<ILogical> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ControlLocator.cs#L14" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>)

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_ControlLocator">ControlLocator Class</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  


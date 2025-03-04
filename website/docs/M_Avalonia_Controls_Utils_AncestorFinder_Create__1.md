import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Create&lt;T&gt;(StyledElement) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<T> Create<T>(
	StyledElement control
)
where T : StyledElement

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Create(Of T As StyledElement) ( 
	control As StyledElement
) As IObservable(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Create : 
        control : StyledElement -> IObservable<'T>  when 'T : StyledElement
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Utils/AncestorFinder.cs#L52" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  StyledElement</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(T)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Utils_AncestorFinder">AncestorFinder Class</a>  
<a href="Overload_Avalonia_Controls_Utils_AncestorFinder_Create">Create Overload</a>  
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetFeature Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual Object? TryGetFeature(
	Type featureType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Function TryGetFeature ( 
	featureType As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetFeature : 
        featureType : Type -> Object 
override TryGetFeature : 
        featureType : Type -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Embedding/Offscreen/OffscreenTopLevelImpl.cs#L89" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

#### Implements
IOptionalFeatureProvider.TryGetFeature(Type)  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase">OffscreenTopLevelImplBase Class</a>  
<a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen Namespace</a>  
